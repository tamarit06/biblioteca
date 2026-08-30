from alembic import op
import sqlalchemy as sa


def upgrade() -> None:
    bind = op.get_bind()
    inspector = sa.inspect(bind)

    columns = [column["name"] for column in inspector.get_columns("books")]

    if "year" not in columns:
        op.add_column(
            "books",
            sa.Column(
                "year",
                sa.Integer(),
                nullable=False,
                server_default="0"
            )
        )


def downgrade() -> None:
    bind = op.get_bind()
    inspector = sa.inspect(bind)

    columns = [column["name"] for column in inspector.get_columns("books")]

    if "year" in columns:
        op.drop_column("books", "year")