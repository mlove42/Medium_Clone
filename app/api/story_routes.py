from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, User, Story, Like, Comment
from app.forms import StoryForm, CommentForm
# from ..utils import Print

story_routes = Blueprint('story', __name__)
def validation_errors(validation_errors):
   
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{error}')
    return errorMessages

# Get All stories
@story_routes.route('')
def get_all_stories():

    stories = Story.query.all()
    
    print(stories)
    
    return {story.id: story.to_dict_home_page() for story in stories}
   
# Create a story
@story_routes.route("", methods=["POST"])
@login_required
def create_new_story():
    current_user_id = int(current_user.get_id())
    stories = Story.query.all()
    form = StoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    # story_data = request.json
    if form.validate_on_submit():
        new_story = Story(
        user_id=current_user_id,
        title = form.data['title'],
        body = form.data['body'],
        brief = form.data['brief'],
        estimated_read = form.data['estimated_read'],
        image = form.data['image']
        )
   
        db.session.add(new_story)
        db.session.commit()
        return new_story.to_dict()
    return {"errors": validation_errors(form.errors)}, 401
      

#Get a Story by its story ID
@story_routes.route('/<int:id>')
@login_required
def get_story_by_id(id):

    story = Story.query.get(id)

    return story.to_dict_home_page()
    


# Edit a Story
@story_routes.route("/<int:id>", methods=["PUT"])
@login_required
def edit_story(id):

    story = Story.query.get(id)
   
    form = StoryForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        story.title = form.data['title']
        story.body = form.data['body']
        story.brief = form.data['brief']
        story.estimated_read = form.data['estimated_read']
        story.image = form.data['image']

        db.session.commit()

        return story.to_dict_basic()
    return {"errors": validation_errors(form.errors)}, 401

# Delete a story
@story_routes.route('/<int:id>', methods=["DELETE"])
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
def postComment(id):
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


#Likes CRUD

@story_routes.route("/<int:story_id>/likes")
@login_required
def likes_by_id(story_id):
    likes = Like.query.filter(Like.story_id == story_id).all()
    return {like.id: like.to_dict() for like in likes}


@story_routes.route("/<int:story_id>/likes", methods=["POST"])
@login_required
def like_unlike(story_id):
    current_user_id = int(current_user.get_id())
    like = Like.query.filter(Like.user_id == current_user_id, Like.story_id == story_id).first()
    if like:
        db.session.delete(like)
        db.session.commit()
        return {"status": "deleted", "story_id": story_id, "like_id": like.id}
    else:
        like = Like(
        user_id=current_user_id,
        story_id=story_id
        )
   
        db.session.add(like)
        db.session.commit()
        return like.to_dict()