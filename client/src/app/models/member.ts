import { Photo } from "./photo";

export interface Member {
    id: number;
    username: string;
    photoUrl: string;
    age: number;
    knownAs: string;
    created: Date;
    lastActive: Date;
    gender: string;
    intoduction: string;
    lookingFor: string;
    interests: string;
    country: string;
    city: string;
    photos: Photo[];
}