// Generated by https://quicktype.io

export interface CastSerie {
    cast: CastDetail[];
    crew: CastDetail[];
    id: number;
}

export interface CastDetail {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: null | string;
    character?: string;
    credit_id: string;
    order?: number;
    department?: string;
    job?: string;
}