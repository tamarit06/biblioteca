"""add year to books

Revision ID: c3df8c7bb22d
Revises: e8c6c617ab86
Create Date: 2026-08-29 19:09:40.839484

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c3df8c7bb22d'
down_revision: Union[str, Sequence[str], None] = 'e8c6c617ab86'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.add_column(
        "books",
        sa.Column("year", sa.Integer(), nullable=False, server_default="0")
    )


def downgrade() -> None:
    op.drop_column("books", "year")