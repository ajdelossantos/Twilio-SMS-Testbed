class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :from, null: false
      t.text :body, null: false
      t.text :metadata
      t.timestamps
    end
    add_index :messages, :from
  end
end
