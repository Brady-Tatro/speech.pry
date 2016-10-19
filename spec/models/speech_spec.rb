require 'rails_helper'
describe Speech do
  let!(:user1) { User.new(id: 1, username: 'partybody200', email: '2hard2party@example.com',password: '123qwe') }
  it 'is valid with both title and media' do
    if user1.save
      expect(Speech.new(title: 'Five Magics', media: 'www.youtube.com/watch?v=fLN1OB3_wG8&list=PLKG--4mRoNpBn8WvKrLdNLkTxrqjx0hue&index=33', user_id: user1.id)).to be_valid
      expect(Speech.new(title: 'Addicted to Chaos', media: 'https://www.youtube.com/watch?v=FWnTJjAKwdY&index=28&list=PLKG--4mRoNpBn8WvKrLdNLkTxrqjx0hue', user_id: user1.id)).to be_valid
    end
  end
  it 'should fail if no title or media is given' do
    if user1.save
      expect(Speech.new(title: 'Five Magics', media: '', user_id: user1.id)).to_not be_valid
      expect(Speech.new(title: '', media: 'https://www.youtube.com/watch?v=z3ONXlI2k0k&list=PLKG--4mRoNpBn8WvKrLdNLkTxrqjx0hue&index=32', user_id: user1.id)).to_not be_valid
      expect(Speech.new(title: '', media: '', user_id: user1.id)).to_not be_valid
    end
  end
  it 'should fail if an incorrect link is provided' do
    if user1.save
      expect(Speech.new(title: 'Five Magics', media: 'monkey', user_id: user1.id)).to_not be_valid
      expect(Speech.new(title: 'Five Magics', media: 'youtube.com/watch?v=fLN1OB3_wG8&list=PLKG--4mRoNpBn8WvKrLdNLkTxrqjx0hue&index=33', user_id: user1.id)).to_not be_valid

    end
  end
end
