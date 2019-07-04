export default {
    get: jest.fn(() => Promise.resolve({ getData: {} })),
    post: jest.fn(() => Promise.resolve({ postData: {} })),
    put: jest.fn(() => Promise.resolve({ putData: {} })),
    delete: jest.fn(() => Promise.resolve({ deleteData: {} })),
};