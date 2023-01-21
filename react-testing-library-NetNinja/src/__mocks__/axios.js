const mockResponse = {
    data: {
        results: [
            {
                name: {
                    first: "Laith",
                    last: "Harb",
                },
                picture: {
                    large: "https://randomuser.me/api/portraits/men/0.jpg",
                },
                login: {
                    username: "TheJestGOAT",
                },
            },
        ],
    },
};

export default {
    get: jest.fn().mockResolvedValue(mockResponse),
};
