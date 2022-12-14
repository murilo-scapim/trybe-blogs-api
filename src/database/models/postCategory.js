const PostCategory = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
        postId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
    },
    { timestamps: false });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
            as: 'posts',
            through: PostCategory,
            foreignKey: 'categoryId',
            otherKey: 'categoryId',
        });

        models.BlogPost.belongsToMany(models.Category, {
            as: 'categories',
            through: PostCategory,
            foreignKey: 'postId',
            otherKey: 'categoryId',
        });
    };
    
    return PostCategory;
};

module.exports = PostCategory;