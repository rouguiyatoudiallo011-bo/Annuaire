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
    dob: {
        age: number
    };
    phone: string;
    email: string;
    id: {
      value: "string";
    }
}

export type PeopleResponse = {
    results: Person[];
}