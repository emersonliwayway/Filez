-- TODO
create table folders {
  id serial [pk]
  name text [unique, not null]
}

create table files {
  id serial [pk]
  name text [not null]
  size int [not null]
  folder_id int [not null]

  indexes {
    (name, folder_id) [unique]
  }
}

Ref: folders.id < files.folder_id