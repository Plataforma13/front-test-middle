class Booking {
    constructor(destination, inboundDate, outboundDate, thumb) {
        this._destination = destination;
        this._inboundDate = inboundDate;
        this._outboundDate = outboundDate;
        this._thumb = thumb;
    }

    static getBookings() {
        return HttpRequest.get('/booking');
    }

    loadFromJson(json) {
        for (let name in json) {
            if (name.toLowerCase().indexOf('date') > -1) {
                this[name] = new Date(json[name]);
            } else {
                this[name] = json[name];
            }
        }
    }

    get destination() {
        return this._destination;
    }

    set destination(destination) {
        this._destination = destination;
    }

    get inboundDate() {
        return this._inboundDate;
    }

    set inboundDate(inboundDate) {
        this._inboundDate = inboundDate;
    }

    get outboundDate() {
        return this._outboundDate;
    }

    set outboundDate(outboundDate) {
        this._outboundDate = outboundDate;
    }

    get thumb() {
        return this._thumb;
    }

    set thumb(thumb) {
        this._thumb = thumb;
    }
}