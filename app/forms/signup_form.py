from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, InputRequired
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def repeated_password(form, field):
    confirm_password = field.data
    password = form.data["password"]
    if password != confirm_password:
        raise ValidationError('Password and Repeated Password fields must match.')
    
class SignUpForm(FlaskForm):
    first_name = StringField('firstName', validators=[DataRequired("First name required")])
    last_name = StringField('firstName', validators=[DataRequired("Last name required")])
    username = StringField('username', validators=[DataRequired("Username required"), username_exists])
    email = StringField('email', validators=[DataRequired("Email required"), user_exists])
    password = StringField('password', validators=[DataRequired("Password required")])
    confirmPassword = StringField('confirmPassword', validators=[repeated_password])