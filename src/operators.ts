import { WhereFunction } from './types';
import { addValueToReferenceSet } from './utils';

export const In = <T extends number | string>(args: T[]): WhereFunction<T> => {
    function fn(valueRefSet: Set<T>) {
        const refs = args.map((arg) => `$${addValueToReferenceSet(arg, valueRefSet)}`);
        return `IN (${refs.join(',')})`;
    }
    return fn;
};
