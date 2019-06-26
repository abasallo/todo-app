class Todo < ActiveRecord::Migration[5.0]
  def change
    create_table :todos do |t|
      t.boolean 'completed'
      t.string 'text'
    end
  end
end
