import * as CommonProtos from "./protobuf"

export default class TeleroboticsNetworkAdapter {
    private _socket: any

    constructor(socket: any) {
        this._socket = socket
    }

    public setRobotControllerData(data: CommonProtos.RobotControllerData) {
        const frame = new CommonProtos.Frame()
        const nullable = new CommonProtos.NullableRobotControllerData()
        nullable.setData(data)
        frame.setNullablerobotcontrollerdata(nullable)
        // console.log(JSON.stringify(frame.toObject()))
        this._socket.emit("sendframe", frame.toObject())
    }
}