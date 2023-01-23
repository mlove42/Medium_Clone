from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, User, Story, Like
from app.forms import StoryForm
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

    return story.to_dict()


# Edit a Story
@story_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_story(id):

    story = Story.query.get(id)

    form = StoryForm()

    story.title = form.data['title']
    story.body = form.data['body']
    story.image = form.data['image']

    db.session.commit()

    return story.to_dict_basic()

