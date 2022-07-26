enum Membership {
    Simple,
    Standart,
    Premium
}

const membership = Membership.Standart
const membershipRevers = Membership[2]
console.log(membership)
console.log(membershipRevers)

enum SocialMedia {
    TWITTER = 'TWITTER',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)