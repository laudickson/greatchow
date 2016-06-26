class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :event_title, null: false
      t.text :body
      t.belongs_to :admin, null: false
      t.timestamps null: false
    end
  end
end
