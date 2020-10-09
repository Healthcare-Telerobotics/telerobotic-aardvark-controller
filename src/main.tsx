import {AvStandardGrabbable, AvTransform, DefaultLanding, AvPanel } from '@aardvarkxr/aardvark-react';
import {Av, g_builtinModelBox } from '@aardvarkxr/aardvark-shared';
import bind from 'bind-decorator';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TeleroboticsNetworkAdapter from './telerobotics/teleroboticsnetworkadapter';
import RobotController from './telerobotics/robotController'

const
    io = require("socket.io-client"),
	socket = io.connect("https://0b8318cf2450.ngrok.io");

const tna = new TeleroboticsNetworkAdapter(socket)
const documentElement = (document as any) as HTMLElement
const robotController = new RobotController(tna, documentElement)

interface DefaulGadgetState
{
	up: boolean
	down: boolean
	right: boolean
	left: boolean
	deflectUp: boolean
	deflectDown: boolean
}

// var velocity = 0
// setInterval(() => {

// 	robotController.setMovementVelocity(0)
// 	robotController.sendFrameData()
// }, 1000)


class MyGadget extends React.Component< {}, DefaulGadgetState >
{
	private m_grabbableRef = React.createRef<AvStandardGrabbable>();

	constructor( props: any )
	{
		super( props );

		this.state = 
		{ 
			up: false,
			down: false,
			right: false,
			left: false,
			deflectUp: false,
			deflectDown: false,
		};
	}

	@bind
	private onUp()
	{
		this.setState(() => {
			return {
				up: true,
			}
		})

		robotController.setMovementVelocity(1)
		robotController.sendFrameData()
	}

	@bind
	private onUpReleased()
	{
		this.setState(() => {
			return {
				up: false,
			}
		})

		robotController.setMovementVelocity(0)
		robotController.sendFrameData()
	}

	@bind
	private onDown()
	{
		this.setState(() => {
			return {
				down: true,
			}
		})

		robotController.setMovementVelocity(-1)
		robotController.sendFrameData()
	}

	@bind
	private onDownReleased()
	{
		this.setState(() => {
			return {
				down: false,
			}
		})

		robotController.setMovementVelocity(0)
		robotController.sendFrameData()
	}

	@bind
	private onLeft()
	{
		this.setState(() => {
			return {
				left: true,
			}
		})

		robotController.setRotationVelocity(-1)
		robotController.sendFrameData()
	}

	@bind
	private onLeftReleased()
	{
		this.setState(() => {
			return {
				left: false,
			}
		})

		robotController.setRotationVelocity(0)
		robotController.sendFrameData()
	}

	@bind
	private onRight()
	{
		this.setState(() => {
			return {
				right: true,
			}
		})

		robotController.setRotationVelocity(1)
		robotController.sendFrameData()
	}

	@bind
	private onRightReleased()
	{
		this.setState(() => {
			return {
				right: false,
			}
		})

		robotController.setRotationVelocity(0)
		robotController.sendFrameData()
	}

	@bind
	private onDeflectUp()
	{
		this.setState(() => {
			return {
				deflectUp: true,
			}
		})

		robotController.setDeflectionVelocity(1)
		robotController.sendFrameData()
	}

	@bind
	private onDeflectUpReleased()
	{
		this.setState(() => {
			return {
				deflectUp: false,
			}
		})

		robotController.setDeflectionVelocity(0)
		robotController.sendFrameData()
	}

	@bind
	private onDeflectDown()
	{
		this.setState(() => {
			return {
				deflectDown: true,
			}
		})

		robotController.setDeflectionVelocity(-1)
		robotController.sendFrameData()
	}

	@bind
	private onDeflectDownReleased()
	{
		this.setState(() => {
			return {
				deflectDown: false,
			}
		})

		robotController.setDeflectionVelocity(0)
		robotController.sendFrameData()
	}

	public render()
	{
		const controllerString = JSON.stringify(this.state)
		return (
			<div>
				<AvStandardGrabbable modelUri={ g_builtinModelBox } modelScale={ 0.03 }
						modelColor="lightblue" useInitialParent={ true } ref={ this.m_grabbableRef } remoteInterfaceLocks={[]}>
					<AvTransform translateY={ 0.08 } >
						<AvPanel interactive={true} widthInMeters={ 0.1 }>
						<div className="controllerValues">
							{controllerString}
						</div>
						<button onMouseDown={this.onUp} onMouseUp={this.onUpReleased}>Up</button>
						<button onMouseDown={this.onDown} onMouseUp={this.onDownReleased}>Down</button>
						<button onMouseDown={this.onLeft} onMouseUp={this.onLeftReleased}>Left</button>
						<button onMouseDown={this.onRight} onMouseUp={this.onRightReleased}>Right</button>
						<button onMouseDown={this.onDeflectUp} onMouseUp={this.onDeflectUpReleased}>Deflect Up</button>
						<button onMouseDown={this.onDeflectDown} onMouseUp={this.onDeflectDownReleased}>Deflect Down</button>
						</AvPanel>
					</AvTransform>
				</AvStandardGrabbable>
			</div>
		);
	}

}

let main = Av() ? <MyGadget/> : <DefaultLanding/>
ReactDOM.render( main, document.getElementById( "root" ) );
