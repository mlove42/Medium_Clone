from flask import Blueprint, redirect, request
from app.models import Comment, db
from flask_login import login_required, current_user
from app.forms import CommentForm

comment_route = Blueprint('comments', __name__)


#Edit a comment 
@comment_route.route('/<int:id>', methods=['PUT'])
def updateComment(id):

    form = CommentForm()
    comment = Comment.query.get(id)

    comment.body = form.data['body']
   

    db.session.commit()

    return comment.to_dict()

# Delete your comment 
@comment_route.route('/<int:id>', methods=['DELETE'])
def deleteComment(id):
    deleteComment = Comment.query.get(id)

    db.session.delete(deleteComment)
    db.session.commit()

    return {"message": "deleted successfully"}