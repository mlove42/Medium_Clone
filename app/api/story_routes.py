from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, User, Story, Like, Comment
from app.forms import StoryForm, CommentForm
# from ..utils import Print

story_routes = Blueprint('story', __name__)


# Get All stories
@story_routes.route('')
def get_all_stories():

    stories = Story.query.all()
    
    print(stories)
    
    return {story.id: story.to_dict_home_page() for story in stories}
   
# Create a story
@story_routes.route("", methods=["POST"])
def create_new_story():

    story_data = request.json

    new_story = Story(**story_data, user_id=current_user.id)
   
    db.session.add(new_story)
    db.session.commit()

    return new_story.to_dict()

#Get a Story by its story ID
@story_routes.route('/<int:id>')
def get_story_by_id(id):

    story = Story.query.get(id)

    return story.to_dict_all()


# Edit a Story
@story_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_story(id):

    story = Story.query.get(id)

    form = StoryForm()

    story.title = form.data['title']
    story.body = form.data['body']
    story.brief = form.data['brief']
    story.estimated_read = form.data['estimated_read']
    story.image = form.data['image']

    db.session.commit()

    return story.to_dict_basic()


# Delete a story
@story_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def delete_story(id):
    data = request.json
    story_delete = Story.query.get(id)


    db.session.delete(story_delete)
    db.session.commit()
    return {"message": "deleted successfully"}


#Get Comments Route
@story_routes.route('/<int:id>/comments')
def storyComments(id):
    comments = Comment.query.filter(Comment.story_id == id).all()

    return {comment.id: comment.to_dict() for comment in comments}


@story_routes.route('/<int:id>/comments', methods=['POST'])
@login_required
def postReview(id):
    current_user_id = int(current_user.get_id())
    form = CommentForm()
    comment = Comment(
        body = form.data['body'],
    
        user_id = current_user_id,
        story_id = id
        )
  
    db.session.add(comment)
    db.session.commit()
    return comment.to_dict()