import React, { ReactNode } from "react";
import { IconFormatBold } from "@/components/_icons/format-bold";
import { IconFormatItalic } from "@/components/_icons/format-italic";
import { IconFormatUnderline } from "@/components/_icons/format-underline";
import { IconCode } from "@/components/_icons/format-code";
import { IconLooksOne } from "@/components/_icons/looks-one";
import { IconLooksTwo } from "@/components/_icons/looks-two";
import { IconFormatQuote } from "@/components/_icons/format-quote";
import { IconBulletedList } from "@/components/_icons/bulleted-list";
import { IconNumberedList } from "@/components/_icons/numbered-list";
import { IconLink } from "@/components/_icons/link";
import { IconFormatImage } from "@/components/_icons/format-image";
import { IconAudiotrack } from "@/components/_icons/audiotrack";
import { IconAttachment } from "@/components/_icons/attachment";
import { IconImage } from "@/components/_icons/image";
import { IconLocked } from "@/components/_icons/locked";
import { IconCloud } from "@/components/_icons/cloud";
import { IconArrowFilled } from "@/components/_icons/arrow-filled";
import { IconDrag } from "@/components/_icons/drag";
import { IconBack } from "@/components/_icons/back";
import { IconBook } from "@/components/_icons/book";
import { IconClose } from "@/components/_icons/close";
import { IconEdit } from "@/components/_icons/edit";
import { IconGrid } from "@/components/_icons/grid";
import { IconMenu } from "@/components/_icons/menu";
import { IconNotification } from "@/components/_icons/notification";
import { IconStarBlock } from "@/components/_icons/star-block";
import { IconStarOutline } from "@/components/_icons/star-outline";
import { IconBulletList } from "@/components/_icons/bullet-list";
import { IconSuccess } from "@/components/_icons/success";
import { IconError } from "@/components/_icons/error";
import { IconSearch } from "@/components/_icons/search";
import { IconArrowDown } from "@/components/_icons/arrow-down";
import { IconArrowUp } from "@/components/_icons/arrow-up";
import { IconRadioUnchecked } from "@/components/_icons/radio-unchecked";
import { IconCheckboxChecked } from "@/components/_icons/checkbox-checked";
import { IconCheckboxUnchecked } from "@/components/_icons/checkbox-unchecked";
import { IconToggleDrawer } from "@/components/_icons/toggle-drawer";
import IconSettings from "@/components/_icons/settings";
import { IconDrawerClose } from "@/components/_icons/drawer-close";
import { IconSync } from "@/components/_icons/sync";
import { IconCheck } from "@/components/_icons/check";
import { IconAlert } from "@/components/_icons/alert";
import { IconPlus } from "@/components/_icons/plus";
import { IconRadioChecked } from "@/components/_icons/radio-checked";
import IconStar from "@/components/_icons/star";
import { IconSolidDot } from "@/components/_icons/solid-dot";
import { IconGoogle } from "@/components/_icons/google";
import { IconAvatar } from "@/components/_icons/avatar";
import { IconCollaboratorEdit } from "@/components/_icons/collaborator-edit";
import IconCard from "./card";
import IconList from "./list";
import { IconTeam } from "@/components/_icons/icon-team";
import { IconOrganisation } from "@/components/_icons/organisation";
import { IconTrash } from "@/components/_icons/trash";
import { IconShuffle } from "@/components/_icons/shuffle";
import { IconSwap } from "@/components/_icons/swap";
import { IconDownload } from "@/components/_icons/download";

interface IconProps {
	color?: string;
	size?: number;
	fill?: string;
}

interface ViewProps extends IconProps {
	pathColor?: string;
	onClick: () => void;
}

const DEFAULT_COLOR = "red"; // PlaceHolder
const DEFAULT_PATH_COLOR = "black"; // PlaceHolder
const DEFAULT_SIZE = 24; // PlaceHolder

export const Icon = ({ children }: { children: ReactNode }): JSX.Element => (
	<>{children}</>
);

Icon.Trash = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconTrash color={color} size={size} />;
};

Icon.Shuffle = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconShuffle color={color} size={size} />;
};

Icon.Organisation = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconOrganisation color={color} size={size} />;
};

Icon.Sync = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconSync color={color} size={size} />;
};

Icon.Star = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconStar color={color} size={size} />;
};

Icon.DrawerClose = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconDrawerClose color={color} size={size} />;
};

Icon.Settings = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconSettings color={color} size={size} />;
};

Icon.ToggleDrawer = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconToggleDrawer color={color} size={size} />;
};

Icon.Close = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconClose color={color} size={size} />;
};

Icon.Attachment = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconAttachment color={color} size={size} />;
};

Icon.Audiotrack = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconAudiotrack color={color} size={size} />;
};

Icon.FormatImage = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconFormatImage color={color} size={size} />;
};

Icon.Link = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconLink color={color} size={size} />;
};

Icon.BulletedList = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconBulletedList color={color} size={size} />;
};

Icon.NumberedList = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconNumberedList color={color} size={size} />;
};

Icon.FormatQuote = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconFormatQuote color={color} size={size} />;
};

Icon.LooksOne = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconLooksOne size={size} color={color} />;
};

Icon.LooksTwo = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconLooksTwo color={color} size={size} />;
};

Icon.Code = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconCode color={color} size={size} />;
};

Icon.FormatBold = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconFormatBold color={color} size={size} />;
};

Icon.FormatItalic = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconFormatItalic color={color} size={size} />;
};

Icon.FormatUnderline = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconFormatUnderline color={color} size={size} />;
};

Icon.Drag = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconDrag color={color} size={size} />;
};

Icon.ArrowFilled = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconArrowFilled color={color} size={size} />;
};

Icon.Image = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconImage color={color} size={size} />;
};

Icon.Locked = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconLocked size={size} color={color} />;
};

Icon.Cloud = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconCloud size={size} color={color} />;
};

Icon.Success = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconSuccess color={color} size={size} />;
};

Icon.Error = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconError color={color} size={size} />;
};

Icon.Check = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconCheck size={size} color={color} />;
};

Icon.Search = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconSearch color={color} size={size} />;
};

Icon.ArrowDown = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconArrowDown size={size} color={color} />;
};

Icon.ArrowUp = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconArrowUp size={size} color={color} />;
};

Icon.RadioChecked = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconRadioChecked size={size} color={color} />;
};

Icon.RadioUnchecked = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconRadioUnchecked size={size} color={color} />;
};

Icon.IconCheckboxChecked = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => {
	return <IconCheckboxChecked size={size} color={color} />;
};

Icon.IconCheckboxUnchecked = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
	fill = "transparent",
}: IconProps): JSX.Element => {
	return <IconCheckboxUnchecked size={size} color={color} fill={fill} />;
};

Icon.Back = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconBack color={color} size={size} />;

Icon.Book = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconBook color={color} size={size} />;

Icon.Close = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconClose color={color} size={size} />;

Icon.Edit = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconEdit color={color} size={size} />;

Icon.Grid = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconGrid color={color} size={size} />;

Icon.Menu = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconMenu color={color} size={size} />;

Icon.Notification = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconNotification color={color} size={size} />;

Icon.StarBlock = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconStarBlock color={color} size={size} />;

Icon.StarOutline = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconStarOutline color={color} size={size} />;

Icon.BulletList = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconBulletList color={color} size={size} />;

Icon.Check = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconCheck color={color} size={size} />;

Icon.Alert = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconAlert color={color} size={size} />;

Icon.Plus = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconPlus color={color} size={size} />;

Icon.SolidDot = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconSolidDot color={color} size={size} />;

Icon.Google = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconGoogle size={size} color={color} />;

Icon.Avatar = ({
	size = DEFAULT_SIZE,
	color = DEFAULT_COLOR,
}: IconProps): JSX.Element => <IconAvatar size={size} color={color} />;

Icon.CollaboratorEdit = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => (
	<IconCollaboratorEdit color={color} size={size} />
);

Icon.Card = ({
	color = DEFAULT_COLOR,
	pathColor = DEFAULT_PATH_COLOR,
	size = DEFAULT_SIZE,
	onClick,
}: ViewProps): JSX.Element => (
	<IconCard color={color} pathColor={pathColor} size={size} onClick={onClick} />
);

Icon.List = ({
	color = DEFAULT_COLOR,
	pathColor = DEFAULT_PATH_COLOR,
	size = DEFAULT_SIZE,
	onClick,
}: ViewProps): JSX.Element => (
	<IconList color={color} pathColor={pathColor} size={size} onClick={onClick} />
);

Icon.Team = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconTeam color={color} size={size} />;

Icon.Swap = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconSwap color={color} size={size} />;

Icon.Download = ({
	color = DEFAULT_COLOR,
	size = DEFAULT_SIZE,
}: IconProps): JSX.Element => <IconDownload color={color} size={size} />;
