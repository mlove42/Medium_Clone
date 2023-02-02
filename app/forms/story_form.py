from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError, optional, Length, InputRequired


class StoryForm(FlaskForm):
    title = StringField("title", validators=[DataRequired("Title Required")])
    body = StringField("Article Text", validators=[DataRequired("Article Text is required")])
    brief = StringField("brief", validators=[DataRequired("Brief required")])
    estimated_read = IntegerField('estimated_read', validators=[InputRequired("Estimated Read required"), optional()])
    image = StringField("image", validators=[DataRequired("Image required")])