 export type Name = {
    title: string;
    first: string;
    last: string
}


export type location = {
    city: string
}

export type picture = {
    large: string;
}
export type Person = {
    name: Name;
    location: location;
    picture: picture;
}

export type PeopleResponse = {
    results: Person[];
}