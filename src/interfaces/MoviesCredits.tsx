// Generated by https://quicktype.io

import { CastDetail } from './SerieCredits';

export interface CreditResponse {
    id: number;
    cast: Cast[];
    crew: Cast[];
}

// export interface Cast extends CastDetail {
//     adult: boolean;
//     gender: number;
//     id: number;
//     known_for_department: string;
//     name: string;
//     original_name: string;
//     popularity: number;
//     profile_path: null | string;
//     cast_id?: number;
//     character?: string;
//     credit_id: string;
//     order?: number;
//     department?: string;
//     job?: string;
// }

export interface Cast extends CastDetail {
    cast_id?: number;
}
