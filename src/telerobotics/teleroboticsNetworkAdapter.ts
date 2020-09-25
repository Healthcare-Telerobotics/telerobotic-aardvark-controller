import * as CommonProtos from "./protobuf"
import { ILiteEvent, LiteEvent } from "./LiteEvent"

export default class TeleroboticsNetworkAdapter {
    private _socket: any
    private readonly onCatheterData = new LiteEvent<CommonProtos.CatheterData.AsObject[], void>()
    private readonly onElectricalSignalData = new LiteEvent<CommonProtos.ElectricalSignalData.AsObject[], void>()

    public get OnCatheterData () { return this.onCatheterData.expose() }
    public get OnElectricalSignalData () { return this.onElectricalSignalData.expose() }

    constructor(socket: any) {
        this._socket = socket
        this._socket.on("onframe", this.onFrame.bind(this))
    }

    public setRobotControllerData(data: CommonProtos.RobotControllerData) {
        const frame = new CommonProtos.Frame()
        const nullable = new CommonProtos.NullableRobotControllerData()
        nullable.setData(data)
        frame.setNullablerobotcontrollerdata(nullable)
        // console.log(JSON.stringify(frame.toObject()))
        this._socket.emit("sendframe", frame.toObject())
    }

    private onFrame(frame: CommonProtos.Frame.AsObject) {
        if (frame.catheterdataList && frame.catheterdataList.length > 0) {
            this.onCatheterData.trigger(frame.catheterdataList)
        }

        if (frame.electricalsignalsList && frame.electricalsignalsList.length > 0)
        {
            this.onElectricalSignalData.trigger(frame.electricalsignalsList)
        }

        // Other data types here
    }
}