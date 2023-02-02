from .db import db, environment, SCHEMA, add_prefix_for_prod


class Like(db.Model):
  __tablename__ = "likes"

  if environment == "production":
     __table_args__ = {'schema': SCHEMA}


  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
  story_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("stories.id")), nullable=True)
  

  user = db.relationship('User', back_populates="likes")
  story = db.relationship('Story', back_populates="likes", foreign_keys=[story_id])

  def __repr__(self):
        return f"<like id: {self.id}, userId: {self.user_id}, storyId: {self.story_id}"
        
  def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "storyId": self.story_id
        }


