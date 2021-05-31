export type StatType = number | null;

export type Stats = {
	searches: StatType,
	emailsSent: StatType,
	emailsReceived: StatType,
	instagramPics: StatType,
	snapchatPics: StatType,
	onlineGamesMinutes: StatType,
	cloudGamesMinutes: StatType,
	youtubeMinutes: StatType,
	netflixMinutes: StatType,
	musicMinutes: StatType,
}

export type CategorizedStats = {
	searches: number,
	emails: number,
	socials: number,
	games: number,
	streaming: number,
}

export type Room = {
	_id?: string,
	name: string,
	slug: string,
	passcode: number,
	sessions: Session[],
}

export type Session = {
	_id?: string,
	stats: Stats,
	email?: string
}
