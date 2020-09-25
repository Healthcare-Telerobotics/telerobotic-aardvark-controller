export interface ILiteEvent<T1,T2> {
    on(handler: { (data?: T1): T2 }) : void;
    off(handler: { (data?: T1): T2 }) : void;
}

export class LiteEvent<T1,T2> implements ILiteEvent<T1,T2> {
    private handlers: { (data?: T1): T2; }[] = [];

    public on(handler: { (data?: T1): T2 }) : void {
        this.handlers.push(handler);
    }

    public off(handler: { (data?: T1): T2 }) : void {
        this.handlers = this.handlers.filter(h => h !== handler);
    }

    public trigger(data?: T1): T2[] {
        const results = [] as T2[]
        this.handlers.slice(0).forEach(h => {
            const result = h(data)
            results.push(result)
        });

        return results
    }

    public expose() : ILiteEvent<T1,T2> {
        return this;
    }
}