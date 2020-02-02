class Api::V1::NotesController < Api::V1::BaseController
	
	def create
		Note.create(note_params)
	end

	def index
	  respond_with Note.all
	end

	def update
		item = Note.find(params["id"])
	  item.update_attributes(note_params)
	  respond_with item, json: item
	end

	def destroy
		Note.destroy(params[:id])
	end

	private

	def note_params
	  params.require(:note).permit(:id, :title, :content)
	end
end