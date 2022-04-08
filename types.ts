export interface GetEventsResults {
    info: Info;
    //results: Event[];
}

export interface Info { 
    count: number;
    pages: number;
    next: string;
    prev: null;
}

export interface Welcome {
    limit:  number;
    offset: number;
    items:  Item[];
    _links: Links;
}

export interface Links {
    self: Self;
}

export interface Self {
    href: string;
}

export interface Item {
    id:          number;
    name:        string;
    slug:        string;
    description: string;
    created:     Date;
    updated:     Date;
    registrations: Registration[];
}

export interface Registration {
    id: number;
    username: string;
    name: string;
    comment: null | string;
}

export interface User {
    id: number;
    name: string;
    username: string;
}

// export interface Welcome {
//     limit:  number;
//     offset: number;
//     results:  Event[];
//     _links: Links;
// }

// export interface Links {
//     self: Self;
// }

// export interface Self {
//     href: string;
// }

// export interface Event {
//     id:          number;
//     name:        string;
//     slug:        string;
//     description: string;
//     created:     Date;
//     updated:     Date;
// }