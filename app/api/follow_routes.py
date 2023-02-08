from flask import Blueprint, request
from flask_login import current_user
from app.models import User, db

follow_routes = Blueprint('follow', __name__)


@follow_routes.route('', methods=['POST'])
def create_follow():
    follower_id = current_user.get_id()
    data = request.json
   
    follower = User.query.get(follower_id)
   
    followed_id = data['user_id']

    followed = User.query.get(followed_id)
    
    followed.followers.append(follower)


    db.session.commit()
    return { 'user': followed.to_dict()}
  


@follow_routes.route('', methods=['DELETE'])
def delete_follow():
    print('-------------------', request.json)
    follower_id = current_user.get_id()
    data = request.json
    follower = User.query.get(follower_id)

    unfollowed_id = data['user_id']
    unfollowed = User.query.get(unfollowed_id)
    unfollowed.followers.remove(follower)


    db.session.commit()
    return { 'userId': unfollowed_id}


