export const convertOperations = (operations) => {
    return operations.reduce((res, operation) => {
        const value = operation.hex ? `0x${operation.value}` : operation.value;
        return res += `${value} ${operation.action} `;
    }, '');
};
