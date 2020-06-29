class UsersController < ApplicationController
  def index
    respond_to do |format|
      format.json
    end
  end

  def edit
    
  end

  def update
    if current_user.update(strong_edit)
      redirect_to root_path
    else
      render :edit
    end
  end

  private

  def strong_edit
    # どうやらrequireではモデルを指定しているみたいだ
    params.require(:user).permit(:name, :email)
    
  end
end
