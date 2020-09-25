import { AvGadget, AvPanel, AvStandardGrabbable, AvTransform, HighlightType, DefaultLanding } from '@aardvarkxr/aardvark-react';
import { EAction, EHand, g_builtinModelBox, InitialInterfaceLock, Av } from '@aardvarkxr/aardvark-shared';
import bind from 'bind-decorator';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const k_TestPanelInterface = "test_panel_counter@1";

interface TestPanelState
{
	count: number;
	grabbableHighlight: HighlightType;
}

class MyGadget extends React.Component< {}, TestPanelState >
{
	private m_grabbableRef = React.createRef<AvStandardGrabbable>();

	constructor( props: any )
	{
		super( props );
	}

	public render()
	{
		return (
			<div>
				<AvStandardGrabbable modelUri={ g_builtinModelBox } modelScale={ 0.03 }
						modelColor="lightblue" useInitialParent={ true } ref={ this.m_grabbableRef } remoteInterfaceLocks={[]}>
					<AvTransform translateY={ 0.08 } >
						<AvPanel interactive={true} widthInMeters={ 0.1 }/>
					</AvTransform>
				</AvStandardGrabbable>
			</div>
		);
	}

}

let main = Av() ? <MyGadget/> : <DefaultLanding/>
ReactDOM.render( main, document.getElementById( "root" ) );
