import { Community } from '../../models/community'
import { ResourceCard, ResourceCardProps } from './resource-card'

export type CommunityCardProps = Omit<
	ResourceCardProps,
	| 'title'
	| 'subtitle'
	| 'image'
	| 'layout'
	| 'imageLayout'
	| 'href'
	| 'tags'
	| 'attributes'
	| 'children'
> & {
	community: Community<string>
}

export function CommunityCard({ community, ...props }: CommunityCardProps) {
	return (
		<ResourceCard
			title={community.name}
			subtitle={community.type}
			href={community.href}
			tags={community.tags}
			layout="imageFirst"
			image={community.image}
			{...props}
		>
			{community.description}
		</ResourceCard>
	)
}
