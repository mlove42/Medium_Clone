from .db import db, environment, SCHEMA


class Comment(db.Model):
  __tablename__ = "comments"

  if environment == "production":
        __table_args__ = {'schema': SCHEMA}

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
  story_id = db.Column(db.Integer, db.ForeignKey("stories.id"), nullable=False)
  body = db.Column(db.String(), nullable=False)

  
  
  comment_owner = db.relationship("User", back_populates="comment")
  comment_story = db.relationship('Story', back_populates="story_comment")
  

  def __repr__(self):
        return f"<Comment id: {self.id}, userId: {self.user_id}, storyId: {self.story_id}, body: {self.body}>"
        
  def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "storyId": self.story_id,
            "body": self.body,
             "picture":self.comment_owner.to_dict_basic()['picture'],
             "firstName":self.comment_owner.to_dict_basic()['firstName'],
             "lastName":self.comment_owner.to_dict_basic()['lastName'],
             "hucklove": self.comment_story.to_dict_all(),
            #   "username": [test.to_dict() for test in self.comment_story],
           
        }


