import queryString from 'query-string';
import {useLocation} from "react-router-dom";


export function useLocationQuery<T>(){
    const location = useLocation();

    return {location, query: queryString.parse(location.search) as Partial<T>, toString: queryString.stringify, toObject: queryString.parse }
}
