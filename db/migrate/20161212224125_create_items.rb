class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.string :description
      t.string :price
      t.belongs_to :category, null: false

      t.timestamps null: false
    end
  end
end
