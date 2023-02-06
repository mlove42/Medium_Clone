from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin



class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    first_name = db.Column(db.String(255), nullable=False)
    last_name = db.Column(db.String(255), nullable=False)
    profile_pic = db.Column(db.String(255), nullable=False, default="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png")
    hashed_password = db.Column(db.String(255), nullable=False)

    
    stories = db.relationship("Story", back_populates="story_author", cascade='all, delete')
    comment = db.relationship("Comment", back_populates="comment_owner")
    liked_stories = db.relationship('Like', back_populates="user")


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return f"<user id: {self.id}, username: {self.username}, email: {self.email}" 

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'stories': [story.to_dict_all() for story in self.stories],
            "picture": self.profile_pic, 
            'firstName': self.first_name,
            "lastName": self.last_name,
            "likes": [likes.to_dict() for likes in self.liked_stories]
        }


    def to_dict_basic(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'firstName': self.first_name,
            "lastName": self.last_name, 
            "picture": self.profile_pic 
        }