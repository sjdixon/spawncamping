module.exports = {
    up: function (migration, DataTypes, done) {
        migration.createTable(
            'users',
            {
                id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true
                },
                createdAt: {
                    type: DataTypes.DATE
                },
                updatedAt: {
                    type: DataTypes.DATE
                },
                fullName: DataTypes.STRING,
                email: DataTypes.STRING,
                password: DataTypes.STRING
            }
        );

        done()
    },
    down: function (migration, DataTypes, done) {
        // add reverting commands here, calling 'done' when finished
        done()
    }
}
