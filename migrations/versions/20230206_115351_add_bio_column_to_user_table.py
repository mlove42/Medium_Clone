"""add bio column to user table

Revision ID: 38d029d35e83
Revises: 027d57612ef5
Create Date: 2023-02-06 11:53:51.444186

"""
from alembic import op
import sqlalchemy as sa
import os
environment = os.getenv("FLASK_ENV")
SCHEMA = os.environ.get("SCHEMA")

# revision identifiers, used by Alembic.
revision = '38d029d35e83'
down_revision = '027d57612ef5'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('biography', sa.String(length=355), default="", nullable=False))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'biography')
    # ### end Alembic commands ###
