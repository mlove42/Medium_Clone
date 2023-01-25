from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError


class StoryForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    body = StringField("body", validators=[DataRequired()])
    brief = StringField("brief", validators=[DataRequired()])
    estimated_read = IntegerField('estimated_read', validators=[DataRequired()])
    image = StringField("image")