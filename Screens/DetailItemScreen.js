import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MainHeader from '../Components/MainHeader';
import Margin from '../Components/Margin';
import TagItem from '../Components/TagItem';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import RoomItem from '../Components/RoomItem';
import PlusIcon from '../Components/PlusIcon';

function DetailItemScreen() {
  const [toggle, setToggle] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(false);
  return (
    <SafeAreaView style={{flex: 1}}>
      <MainHeader />
      <Margin value={5} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../Images/textImage.png')}
          style={styles.image}
        />
        <View style={styles.d_day_container}>
          <Text style={styles.d_day_text}>D-64</Text>
        </View>
        <TouchableOpacity activeOpacity={0.3} onPress={null}>
          <Image
            source={require('../Images/expandIcon.png')}
            style={styles.expandIcon}
          />
        </TouchableOpacity>
        <View style={styles.subjectContainer}>
          <LinearGradient
            colors={['transparent', 'black']}
            style={styles.linearGradient}>
            <Text style={styles.subjectText} numberOfLines={2}>
              2022 고용노동부 일‧생활균형 홍보 포스터 공모전
            </Text>
          </LinearGradient>
        </View>
        <TouchableOpacity
          activeOpacity={0.3}
          onPress={() => setToggleIcon(prev => !prev)}>
          <Icon
            name={toggleIcon ? 'heart' : 'heart-outline'}
            size={30}
            color={'red'}
            style={{position: 'absolute', right: 7, bottom: 66}}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={
            toggle ? styles.onSubToggleContainer : styles.offSubToggleContainer
          }
          activeOpacity={0.3}
          onPress={() => setToggle(true)}>
          <Text style={toggle ? styles.onToggleText : styles.offToggleText}>
            소개
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            toggle ? styles.offSubToggleContainer : styles.onSubToggleContainer
          }
          activeOpacity={0.3}
          onPress={() => setToggle(false)}>
          <Text style={toggle ? styles.offToggleText : styles.onToggleText}>
            팀원모집
          </Text>
        </TouchableOpacity>
      </View>
      {toggle && (
        <>
          <Margin value={5} />
          <View style={styles.tagContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <TagItem value={'기획/아이디어'} />
              <TagItem value={'네이밍/슬로건'} />
              <TagItem value={'대외활동/서포터즈'} />
              <TagItem value={'예체능/미술/음악'} />
            </ScrollView>
          </View>
          <Margin value={5} />
          <View style={{flexDirection: 'row', marginLeft: 12}}>
            <Text style={styles.text1}>모집기간 : </Text>
            <Text style={styles.text2}>~2022년 7월 9일</Text>
          </View>
          <Margin value={5} />
          <Text style={[styles.text1, {marginLeft: 12}]}>상세설명</Text>
          <View
            style={{
              flex: 1,
              marginHorizontal: 16,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 11,
              backgroundColor: '#F4F4F4',
            }}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text
                style={
                  styles.text3
                }>{`2022 고용노동부 일/생활균형 홍보 포스터 공모전
고용노동부와 함께할 아이디어 가득한 열정 넘치는 대학생분들의 많은 관심과 지원 부탁드립니다!
■ 모집일정
- 모집기간 : 2022년 9월 11일 (월) ~ 10월 15일 (일)
- 대면 면접 심사 : 2022년 10월 27일 (금) (장소: 서울 예정) *합격자에 한해 개별 연락
- 최종 합격자 발표 : 2022년 11월 1일 (수)
※상기 일정은 공사 사정에 따라 변경될 수 있습니다.
■ 모집대상
- LH공사 및 SNS 활동에 관심이 많은 대학생 또는 휴학생
- 총 20팀 (개인 또는 팀 단위로 지원 가능, 팀 구성 최대 3명)
- 펜그룹(카드뉴스) / 영상그룹
■ 활동내용
- 활동기간 : 2023년 11월 ~ 2024년 4월 (6개월)
- 공사 관련 홍보 콘텐츠 제작 및 개인 SNS 업로드
- 월별 미션 수행 및 공사 관련 행사 (발대식, 워크샵, 정기회의, 해단식 등) 참여
■ 발대식
- 최종 합격자 전원 필수 참석
- 2023년 11월 10일 (금), LH한국토지주택공사 본사(진주)
※상기 일정과 장소는 상황에 따라 변경될 수 있습니다.
■ 활동혜택
- 월별 활동 지원비(15만원) 및 콘텐츠 제작 장려금 지급
- 콘텐츠 제작 역량 강화 교육 및 네트워킹 참여 기회
- 우수 활동자 시상
- 최우수/우수 LH 영(Young)크리에이터 수상 시, 공사 체험형 인턴 서류전형 면제 (수상 후 2년 이내 1회)
- 활동 종료 시 공식 수료증 수여
■ 지원방법
- 지원서 / 포트폴리오 / 개인정보처리동의서 작성 후 메일 접수
- 지원서는 LH 블로그에서 다운로드 가능합니다. 지원서 다운로드 바로가기 https://blog.naver.com/bloglh/223208052438
※ 지원서 내 선발 후 활동할 지역(수도권 또는 비수도권)을 선택하여 지원 (출신지역과 무관)
- 메일 : youngcreator.with.lh@gmail.com
★ 추가 안내사항 (2023.09.26 기준)
팀으로 지원 시, 서류 제출에 대한 문의가 많아 추가 안내 드립니다.
팀 단위 지원 시, 하기와 같이 제출 바랍니다.
- 팀 대표자 지원서 1부 (성명란에 팀원 성명 전원 기재)
- 팀 대표 포트폴리오 1부 (팀 대표자의 포트폴리오가 아닌, 팀을 대표할 수 있는 포트폴리오이며 지원서에 명시된 제작 미션 외에 팀과 팀원을 어필할 수 있는 내용 포함)
- 팀 참여자 전원 개인정보처리동의서
■ 유의사항
- 제출된 서류는 반환되지 않으며, 제출된 서류에 기재된 내용이 사실과 다를 경우 선발대상에서 제외되며, 선발이 되었더라도 취소될 수 있습니다.
- 공사 SNS에 채택되어 게시되는 모든 콘텐츠의 저작권은 LH한국토지주택공사 소유로 귀속됩니다.
- 면접 심사 시 일정 기준에 미달되는 지원자는 부적격 처리되며(모집 규모와 무관하게 선발 불가), 지원현황에 따라 선발인원의 비율은 변경될 수 있습니다.
- 선발 심사 과정 및 결과는 비공개를 원칙으로 합니다.
- 미션 불이행, 관련 행사 미참여 시 활동비 지급 및 수료증 발급이 제한될 수 있습니다.
- 월 1건 이상의 콘텐츠 제작 및 업로드 미완료시 활동비 지급이 불가합니다.
■ 문의
- 운영사무국 (02-6429-3816) / 문의시간 10:00~18:00, 점심시간 12:00~13:00
 대학생 대외활동 공모전 채용 사이트 링커리어 https://linkar`}</Text>
            </ScrollView>
          </View>
        </>
      )}
      {!toggle && (
        <>
          <View style={styles.roomContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <RoomItem />
              <RoomItem />
              <RoomItem />
              <RoomItem />
              <RoomItem />
              <RoomItem />
            </ScrollView>
            <View style={styles.icon}>
              <PlusIcon onPress={null} />
            </View>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {flexDirection: 'row', width: '100%', height: 300},
  image: {width: '100%', height: '100%'},
  d_day_container: {
    width: 62,
    height: 24,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 121, 45, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 7,
    top: 12,
  },
  d_day_text: {fontSize: 15, fontWeight: '700', color: 'white'},
  expandIcon: {position: 'absolute', right: 15, top: 9},
  subjectContainer: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
  },
  subjectText: {fontSize: 17, fontWeight: '700', color: 'white'},
  linearGradient: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleContainer: {
    width: '100%',
    height: 31,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tagContainer: {
    width: '100%',
    paddingLeft: 6,
  },
  roomContainer: {
    flex: 1,
    paddingHorizontal: 13,
    alignItems: 'center',
  },
  onSubToggleContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderColor: '#FF792D',
  },
  offSubToggleContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    marginHorizontal: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 11,
    backgroundColor: '#F4F4F4',
  },
  onToggleText: {fontSize: 14, fontWeight: '700', color: '#FF792D'},
  offToggleText: {fontSize: 14, fontWeight: '700', color: 'black'},
  text1: {fontSize: 15, fontWeight: '700', color: 'black'},
  text2: {fontSize: 15, fontWeight: '700', color: '#FF792D'},
  text3: {fontSize: 8, fontWeight: '500'},
  icon: {position: 'absolute', right: 15, top: 297},
});

export {DetailItemScreen};
