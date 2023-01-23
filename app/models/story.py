from .db import db, environment, SCHEMA

import datetime
class Story(db.Model):
    __tablename__ = 'stories'
    
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(300), nullable=False)
    body = db.Column(db.String(300), nullable=False)
    image = db.Column(db.String, nullable=True)
    created_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    story_author = db.relationship("User", back_populates="stories")

    story_comment = db.relationship('Comment', back_populates="comment_story")

    likes = db.relationship("Like", back_populates="story", cascade='all, delete-orphan')
  
    
    def __repr__(self):
        return f"<story id: {self.id}, title: {self.title}, body: {self.body}"
    
 
 
    
    
    def to_dict_home_page(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "firstName": self.story_author.to_dict()["firstName"],
            "lastName": self.story_author.to_dict()['lastName'],
            "picture":self.story_author.to_dict()['picture'],
            "title": self.title,
            "body": self.body
        }
   
    def to_dict_all(self):

        return {
 
            "id": self.id,
            "userId": self.user_id,
            "title": self.title,
            "body": self.body, 
            'likes': [like.to_dict() for like in self.likes],
            "comments": [comments.to_dict() for comments in self.story_comment],
        }
    
    def to_dict_basic(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "title": self.title,
            "body": self.body, 
       

        
        }

   