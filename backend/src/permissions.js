const permissions = {
    USERS: 'USERS',
    BILLS: 'BILLS',
    INCOME: 'INCOME'
};

const getPermission = (permissionName, read, write) => ({code: permissions[permissionName], read, write});

module.exports = {
    1: [
        getPermission('USERS', true, true),
        getPermission('BILLS', true, false),
        getPermission('INCOME', false, false),
    ],
    2: [
        getPermission('USERS', false, false),
        getPermission('BILLS', true, true),
        getPermission('INCOME', true, false),
    ],
    3: [
        getPermission('USERS', true, false),
        getPermission('BILLS', false, false),
        getPermission('INCOME', true, true),
    ]
};