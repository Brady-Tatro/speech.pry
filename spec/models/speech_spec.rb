require 'rails_helper'
describe Speech do
  let!(:user1) { User.new(id: 1, username: 'partybody200', email: '2hard2party@example.com',password: '123qwe') }


  it 'should fail if no title or media is given' do
    if user1.save
      expect(Speech.new(title: 'Five Magics', media: '', userId: user1.id)).to_not be_valid
      expect(Speech.new(title: '', media: 'https://www.youtube.com/watch?v=z3ONXlI2k0k&list=PLKG--4mRoNpBn8WvKrLdNLkTxrqjx0hue&index=32', userId: user1.id)).to_not be_valid
      expect(Speech.new(title: '', media: '', userId: user1.id)).to_not be_valid
    end
  end
  it 'should fail if an incorrect link is provided' do
    if user1.save
      expect(Speech.new(title: 'Five Magics', media: 'monkey', userId: user1.id)).to_not be_valid
      expect(Speech.new(title: 'Five Magics', media: 'youtube.com/watch?v=fLN1OB3_wG8&list=PLKG--4mRoNpBn8WvKrLdNLkTxrqjx0hue&index=33', userId: user1.id)).to_not be_valid

    end
  end
end
