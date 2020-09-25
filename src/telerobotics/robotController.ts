import * as CommonProtos from "./protobuf"

import TeleroboticsNetworkAdapter from "./teleroboticsnetworkadapter"

/*
    Sends robotic commands to the server
*/
export default class RobotController {
    private _data: CommonProtos.RobotControllerData = new CommonProtos.RobotControllerData()
    private _dataChanged: boolean
    private _tna: TeleroboticsNetworkAdapter

    constructor(tna: TeleroboticsNetworkAdapter, scope: HTMLElement) {
        this._tna = tna
    }

    public SendFrameData() {
        if (this._dataChanged) {
            this._tna.setRobotControllerData(this._data)
            this._dataChanged = false
        }
    }

    public setRotationVelocity(velocity: number) {
        if (this._data.getRotationvelocity() != velocity) {
            this._data.setRotationvelocity(velocity)
            this._dataChanged = true
        }
    }

    public setDeflectionVelocity(velocity: number) {
        if (this._data.getDeflectionvelocity() != velocity) {
            this._data.setDeflectionvelocity(velocity)
            this._dataChanged = true
        }
    }

    public setMovementVelocity(velocity: number) {
        if (this._data.getMovementvelocity() != velocity) {
            this._data.setMovementvelocity(velocity)
            this._dataChanged = true
        }
    }
}