/**
 * Convert to BRL currency format
 * @param Pixels - Pixels value to be converted
 * @returns the converted rem value
 */

export function currencyConvert(value: number): string{
    return new Intl.NumberFormat('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    }).format(value);
}