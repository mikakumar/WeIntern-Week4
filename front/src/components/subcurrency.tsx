

export function ConvertSubcurrency(amount: number, factor=100){
    return Math.round(amount*factor);
}
