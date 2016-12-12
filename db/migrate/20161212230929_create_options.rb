class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.string :name
      t.string :price
      t.belongs_to :item, null: false

      t.timestamps null: false
    end
  end
end
