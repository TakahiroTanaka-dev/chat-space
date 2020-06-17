## users テーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null :false, unique: true, index: true|
|email|string|null :false, unique: true|
|password|string|null: false|

### Association
- has_many :users_groups
- has_many :groups

